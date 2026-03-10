declare module "gsap/SplitText" {
  export interface SplitTextConfig {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
  }

  export class SplitText {
    constructor(
      targets: string | string[] | Element | Element[],
      vars?: SplitTextConfig
    );

    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];

    split(vars?: SplitTextConfig): void;
    revert(): void;
  }
}
