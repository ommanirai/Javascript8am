/*
Regular expression
/../  - regular expression literal
/gmail.com/ - regular expression
/[]/ - single character
/abc/ - exact match
/[abc]/ - collection of a, b, c
/[a-z]/ - collection of lowercase alphabets
/[A-Z]/ - collection of uppercase alphabets
/[a-zA-Z]/ - collection of lowercase and uppercase alphabets
/[0-9]/ - collection of numbers 0-9
/[a-zA-Z0-9]/ - collection of lowercase, uppercase alphabets and numbers
/[_\-\.@]/ - special characters

\[@!$#$#$]\


\^[a-z](gmail.com)$\

metacharacters:
^ - start
$ - end
[a-z]+ - at least one (one or more)
[a-z]? - one or none
[]* - 0 or multiple
[a-z]+{8} - minimum n number of characters
[]{8,30} - at least n, at most m characters
[]{n,} - at least n characters
(abc) - compulsory

/d - numbers, 0-9
/D - not number
/w - alphanumeric characters, a-z, A-Z, 0-9
/W - not alphanumeric characters
/s - special characters
/S - not special characters


mobile number - 10digits, starts with 9
/^(9)[0-9]+{9}$/

ommanirai27@gmail.com
email - /^[a-z]+[a-z0-9_.\-]+(@)[a-z]+[.](com)$/

password - [a-z]+[A-Z]+[0-9]+[\/.@!#$%^&*]+{8, 30}

*/