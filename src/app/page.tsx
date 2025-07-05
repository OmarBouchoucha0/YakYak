"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CreateRoomButton } from '@/components/create-room';

export default function MeetUI() {
    const [roomId, setRoomId] = useState("")

    return (
        <div className="min-h-screen flex items-center justify-center bg-background h-full w-full">
            <div className="w-full max-w-sm space-y-6 border rounded-xl p-10">
                {/* Logo */}
                <div className="flex flex-col items-center gap-4 ">
                    <h1 className="text-2xl font-semibold">YakYak</h1>
                </div>

                {/* Input Field */}
                <div className="space-y-2">
                    <Input
                        placeholder="Enter room code"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />
                </div>

                {/* Buttons */}
                <div className="space-y-4">
                    <Button className="w-full bg-primary text-white" disabled={!roomId.trim()}>
                        Join Room
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <Separator className="w-full" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                OR
                            </span>
                        </div>
                    </div>
                    <CreateRoomButton />
                </div>
            </div>
        </div>
    )
}
