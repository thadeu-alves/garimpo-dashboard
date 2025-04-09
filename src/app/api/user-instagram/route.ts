// app/api/user/route.ts
import { NextResponse } from 'next/server';
import { IgApiClient } from 'instagram-private-api';
import * as fs from 'fs/promises';
import * as path from 'path';

const SESSION_FILE = path.join(process.cwd(), 'ig-session.json');

export async function GET() {
  const username = "garimpo_style_";
  const igUsername = process.env.INSTAGRAM_USERNAME;
  const igPassword = process.env.INSTAGRAM_PASSWORD;

  if (!igUsername || !igPassword) {
    return NextResponse.json(
      { error: 'Credenciais do Instagram não configuradas' },
      { status: 500 }
    );
  }

  const ig = new IgApiClient();
  ig.state.generateDevice(username);

  try {
    // Tenta carregar a sessão salva
    try {
      const session = await fs.readFile(SESSION_FILE, 'utf-8');
      await ig.state.deserialize(session);
    } catch {
      // Se não houver sessão, faz login e salva
      await ig.account.login(igUsername, igPassword);
      const serializedState = await ig.state.serialize();
      await fs.writeFile(SESSION_FILE, JSON.stringify(serializedState));
    }

    // Busca informações do perfil
    const user = await ig.user.searchExact(username);
    const userInfo = await ig.user.info(user.pk);

    return NextResponse.json(
      {
        username: userInfo.username,
        full_name: userInfo.full_name,
        followers: userInfo.follower_count,
        posts: userInfo.media_count,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao buscar dados do Instagram:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar dados do Instagram', details: error },
      { status: 500 }
    );
  }
}