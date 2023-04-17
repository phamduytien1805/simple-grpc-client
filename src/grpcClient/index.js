import { ChatServiceClient } from '../chat_grpc_web_pb';

export const client = new ChatServiceClient(
  'http://localhost:8080',
  null,
  null
);
