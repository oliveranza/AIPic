export interface iPhoto {
  id: string;
  postdate?: Date
  url: string;
  description: string;
  allowComments?: boolean;
  likes?: number;
  comments?:number;
  userId: number
}
