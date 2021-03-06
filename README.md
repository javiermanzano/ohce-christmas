
# OHCE by @jmtorralvo & @jmanzano


# What's consider palindrome:

*A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as taco cat or madam or racecar or the number 10801.*

*Sentence-length palindromes may be written when allowances are made for adjustments to capital letters, punctuation, and word dividers, such as “A man, a plan, a canal, Panama!”, “Was it a car or a cat I saw?” or “No ‘x’ in Nixon”.*

https://en.wikipedia.org/wiki/Palindrome


# How to generate executable and run it

You have just to run (2 options)

Install Globally:
```
npm ohce-christmas-g -g
ohce <YOUR_NAME>
```

Create a binary:
```
npm install -g pkg
yarn bundle
./ohce-christmas-g-macos Torralvo
```

Anyways three different versions have been created and are available in the root of the project and are ready to use:

```
./ohce-christmas-g-linux
./ohce-christmas-g-macos
./ohce-christmas-g-win.exe
```

# Kata statement

**ohce** is a console application that echoes the reverse of what you input through the console.

Even though it seems a silly application, **ohce** knows a thing or two.

When you start oche, it greets you differently depending on the current time, but only in Spanish:

1. Between 20 and 6 hours, **ohce** will greet you saying: ¡Buenas noches < your name >!

2. Between 6 and 12 hours, **ohce** will greet you saying: ¡Buenos días < your name >!

3. Between 12 and 20 hours, **ohce** will greet you saying: ¡Buenas tardes < your name >!

When you introduce a palindrome, **ohce** likes it and after reverse-echoing it, it adds ¡Bonita palabra!

**ohce** knows when to stop, you just have to write Stop! and it'll answer Adios < your name > and end.

This is an example of using **ohce** during the morning:

```
$ ohce Pedro
> ¡Buenos días Pedro!
$ hola
> aloh
$ oto
> oto
> ¡Bonita palabra!
$ stop
> pots
$ Stop!
> Adios Pedro
```