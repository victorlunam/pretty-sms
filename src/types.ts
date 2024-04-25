export interface Trigger {
  name: string;
  condition: string;
}

export interface Template {
  name: string;
  description: string;
  content: string;
  trigger: Trigger
  triggerId: string;
}