# Specificity in CSS - Intro

One of the most important concepts with CSS is specificity. Imagine you select an element by it's class and give it some style; then, on the next line, you select the same element by it's element name and it's ID - how does the browser know what style to apply?  Well, every element gets a score and it's this score that dictates what CSS property is applied.

[Specificity Calculator](http://specificity.keegan.st/)

Every selector has its place in the specificity hierarchy, and if two selectors apply to the same element, the one with higher specificity wins.  Overall, there are four distinct factors that define the specificity level of a given selector: inline styles, IDs, classes+attributes and elements.  You can calculate CSS specificity with CSS Specificity Calculator:

<img src="https://css-tricks.com/wp-content/csstricks-uploads/specificity-calculationbase.png" />

### Calculating specificity

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-1.png' />

*This is calculated as 113*

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-2.png' />


*This is calculated as 23*

<img src='https://css-tricks.com/wp-content/csstricks-uploads/cssspecificity-calc-4.png' />

*This is calculated as 1000*

A couple of rules to think about:

- If two selectors apply to the same element, the one with higher specificity wins
- When selectors have an equal specificity value, the latest rule is the one that counts
- When selectors have an unequal specificity value, the more specific rule is the one that counts
- Rules with more specific selectors have a greater specificity
- The last rule defined overrides any previous, conflicting rules
- The embedded style sheet has a greater specificity than other rules
- ID selectors have a higher specificity than attribute selectors
- You should always try to use IDs to increase the specificity
- A class selector beats any number of element selectors

_Taken from [SmashingMagazine.com](http://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)_
