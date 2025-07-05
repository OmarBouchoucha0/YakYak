'use client'

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Phone, Headphones, HeadphoneOff, Copy } from 'lucide-react';
import { toast } from 'sonner';

export default function RoomPage() {
    const params = useParams();
    const router = useRouter();
    const [isMuted, setIsMuted] = useState(false);
    const [isDeafened, setIsDeafened] = useState(false);
    const roomId = params.roomId as string;

    const copyRoomId = () => {
        navigator.clipboard.writeText(roomId);
        toast.success('Room ID copied to clipboard!');
    };

    const endCall = () => {
        // Add any cleanup logic for WebRTC connections here
        router.push('/');
    };

    return (
        <div className="flex flex-col h-full">
            {/* Header with room ID - fixed height */}
            <header className="flex justify-between items-center p-4 border-b shrink-0">
                <h1 className="text-xl font-semibold">Voice Room</h1>
                <Button
                    variant="outline"
                    onClick={copyRoomId}
                    className="flex items-center gap-2"
                >
                    <Copy className="h-4 w-4" />
                    <span>Copy Room ID</span>
                </Button>
            </header>

            {/* Main content area */}
            <div className="flex-1 p-4 overflow-auto ">
                <div className="grid grid-cols-1  gap-4 w-full h-full">
                    <div className="bg-card rounded-lg p-4 border flex items-center justify-center">
                        <p className="font-medium">You</p>
                    </div>
                </div>
            </div>

            <footer className="p-4 border-t shrink-0">
                <div className="flex justify-center gap-4">
                    <Button
                        variant={isMuted ? 'destructive' : 'outline'}
                        size="lg"
                        onClick={() => setIsMuted(!isMuted)}
                        className="rounded-full aspect-square p-0"
                    >
                        {isMuted ? (
                            <MicOff className="h-6 w-6" />
                        ) : (
                            <Mic className="h-6 w-6" />
                        )}
                    </Button>

                    <Button
                        variant={isDeafened ? 'destructive' : 'outline'}
                        size="lg"
                        onClick={() => setIsDeafened(!isDeafened)}
                        className="rounded-full aspect-square p-0"
                    >
                        {isDeafened ? (
                            <HeadphoneOff className="h-6 w-6" />
                        ) : (
                            <Headphones className="h-6 w-6" />
                        )}
                    </Button>

                    <Button
                        variant="destructive"
                        size="lg"
                        onClick={endCall}
                        className="rounded-full aspect-square p-0"
                    >
                        <Phone className="h-6 w-6" />
                    </Button>
                </div>
            </footer>
        </div>
    );
}
