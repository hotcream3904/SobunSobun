import { instance } from "./instance";

// 채팅방
export const fetchChatRoomList = async () => { // 전체 조회
	const response = await instance.get("/chat/rooms");
	return response.data;
};

export const addChatRoom = async () => { // 생성
    const response = await instance.post("/chat/room");
	return response;
};

export const enterChatRoom = async (roomId: string) => { // 입장
    const response = await instance.get(`/chat/room/enterA/${roomId}`);
	return response;
};

export const fetchChatRoom = async (roomId: string) => { // 채팅방 상세 조회
	const response = await instance.get(`/chat/room/${roomId}`);
	return response;
};

export const fetchChatMessages = async (roomId: string) => { // 채팅방 내 메시지 조회
	const response = await instance.get(`/chat/${roomId}`);
	return response;
};