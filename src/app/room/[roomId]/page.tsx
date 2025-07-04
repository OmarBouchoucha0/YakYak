interface RoomPageProps {
    params: {
        roomId: string;
    };
}

export default function RoomPage({ params }: RoomPageProps) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Room: {params.roomId}</h1>
        </div>
    );
}
