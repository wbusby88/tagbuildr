export = tagbuildr;

type Child = Element|string|number;

declare function tagbuildr(tagString: string, children?: Child|Array<Child>): Element;