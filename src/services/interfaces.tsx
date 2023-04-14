export interface Event {
  id: string;
  name: string;
  description: string;
  date_begin: string;
  data_end: string;
  unix_begin: number;
  duration: string;
}
export interface Channel {
  id: string;
  number: string;
  name: string;
  image: string;
  events: Event[];
}
export interface Guide {
  response: {
    channels: Channel[];
  };
}
