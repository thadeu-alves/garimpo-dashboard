import { FollowersCard } from '@/components/FollowersCard';
import { Card } from '@/components/ui/card';

export default function Social() {
    return (
        <section className="space-y-8">
            <div className="space-y-4">
                <div className="flex gap-4">
                    <FollowersCard social="instagram" />
                    <FollowersCard social="instagram" />
                </div>
                <div className="h-80">
                    <Card className="min-h-full"></Card>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex gap-4">
                    <FollowersCard social="instagram" />
                    <FollowersCard social="instagram" />
                </div>
                <div className="h-80">
                    <Card className="min-h-full"></Card>
                </div>
            </div>
        </section>
    );
}
