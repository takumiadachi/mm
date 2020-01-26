export interface IStory {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    comments: Comment[];
  }
  
  export interface IComment {
    by: string;
    id: number;
    kids: number[];
    parent: number;
    text: string;
    time: number;
    type: string;
    comments: Comment[];
  }
  
  export class Story implements IStory {
    by: string = '';
    descendants: number = 0;
    id: number = 0;
    kids: number[] = [];
    score: number = 0;
    time: number = 0;
    title: string = '';
    type: string = '';
    url: string = '';
    comments: Comment[] = [];
  
    constructor(data?: Partial<Story>) {
      Object.assign(this, data);
    }
  
    public static fromJSON = (json: string): Story => {
      const jsonObject = JSON.parse(json);
      return new Story(jsonObject);
    };
  }
  
  export class Comment implements IComment {
    by: string = '';
    id: number = 0;
    kids: number[] = [];
    parent: number = 0;
    text: string = '';
    time: number = 0;
    type: string = '';
    comments: Comment[] = [];
  
    constructor(data: Partial<Comment>) {
      Object.assign(this, data);
    }
  
    public static fromJSON = (json: string): Comment => {
      const jsonObject = JSON.parse(json);
      return new Comment(jsonObject);
    };
  }