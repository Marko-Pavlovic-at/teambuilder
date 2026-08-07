### P2 · A page that responds
- Something the user types or clicks changes what's on the page, with no reload.
- A list that grows and shrinks from user input.
- Each item can be individually removed.
- An empty state — the page makes sense when the list has nothing in it.
- Invalid input is rejected without breaking anything.


Steps:
- create html css and js basic structure and styling link files DONE
- create an input with a label and an add button style it DONE


Theme: 
A Teambuilder wuwa themed


:root {
  /* Backgrounds */
  --ww-bg-darkest:   #0a0e12;  /* main background */
  --ww-bg-dark:      #121820;  /* panels */
  --ww-bg-surface:   #1c242e;  /* cards / raised */
  --ww-bg-elevated:  #2a343f;  /* hover / borders */

  /* Signature cyan / teal */
  --ww-cyan:         #4fd1c5;
  --ww-cyan-bright:  #6ff5e8;  /* glow / active */
  --ww-cyan-dim:     #2a7d76;

  /* Gold / amber accents */
  --ww-gold:         #e8c96a;
  --ww-gold-bright:  #f5dd8a;
  --ww-amber:        #d99b3d;

  /* Text */
  --ww-text:         #e6ebf0;  /* primary */
  --ww-text-muted:   #9aa5b1;  /* secondary */
  --ww-text-faint:   #5c6873;  /* disabled / hints */

  /* Utility */
  --ww-border:       #313d49;
  --ww-danger:       #e05a5a;
  --ww-success:      #6bcf7f;
}