import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export async function FollowersCard({social} : {social: string}) {
  const response = await fetch(process.env.NEXT_BASE_URL + `/api/user-${social}`);
  const data = await response.json();


  return (
    <Card className="w-full md:flex-row md:justify-between md:px-4">
        <CardHeader className="p-2 text-center ">
            <CardTitle className="gap-2 text-sm lg:text-xl">
                {data.username}
            </CardTitle>
            <CardDescription>{data.followers}</CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center">
          {social == "instagram" ? <Image src="insta.svg" width={40} height={40} alt='insta logo' /> : "" }
        </CardContent>
    </Card>
  )
}
