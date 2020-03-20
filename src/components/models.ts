export enum Status {
  CREATED = "CREATED",
  PENDING = "PENDING",
  DOING = "DOING",
  PAUSE = "PAUSE",
  FINISED = "FINISED",
  CANCELED = "CANCELED",
  DELETED = "DELETED"
}

export enum BuiltinTag {
  IMPORTANT = 'IMPORTANT',
  NOTIMPORTANT = 'NOTIMPORTANT',
  URGENT = 'URGENT',
  NOTURGENT = 'NOTURGENT',
}

export const BUILTIN_TAGS =[BuiltinTag.NOTIMPORTANT, BuiltinTag.IMPORTANT, BuiltinTag.NOTURGENT, BuiltinTag.URGENT]


export class Phase {
  from: Date;
  to?: Date;
  status: Status;
  constructor (status: Status){
    this.status = status;
    this.from = new Date();
  }
}


export class Todo {
  name: string;
  tags: Set<string>;
  created: Date;
  phases: Phase[] = [];
  finised?: Date;

  constructor(name:string, tags:string[] = []){
    this.name = name;
    this.created = new Date();
    this.tags = new Set(tags);
    this.phases.push(new Phase(Status.CREATED));
  }


  makeFinished() {
    this.finised = new Date()
  }

  addTag(tag: string) {
    this.tags.add(tag);
  }

  removeTag(tag: string) {
    this.tags.delete(tag)
  }
}