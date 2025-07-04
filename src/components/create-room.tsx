'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { generateRoomId } from '@/lib/room';
import { Loader2Icon } from "lucide-react"

export function CreateRoomButton() {
    const router = useRouter();
    const [isCreating, setIsCreating] = useState(false);

    const handleCreateRoom = async () => {
        try {
            setIsCreating(true);
            const roomId = generateRoomId();

            router.push(`/room/${roomId}`);
        } catch (error) {
            console.error('Failed to create room:', error);
        } finally {
            setIsCreating(false);
        }
    };

    return (
        <Button
            onClick={handleCreateRoom}
            disabled={isCreating}
            className="w-full"
            variant="outline"
        >
            {isCreating ? (
                <>
                    <Loader2Icon className="animate-spin" />
                    Please wait
                </>
            ) : (
                'Create New Room'
            )}
        </Button>
    );
}
