# BlueFrame
This is a small organization, made by Seth, Brandon and, Joel. 

Some basic git commands

Copy down (clone) the repository from github
```
git clone git@github.com:ItsMurf/BlueFrame.git
```

Stage a change for committing

```
git add [filename]
```

See what files have changed

```
git status
```

See the actual changes

```
git diff
```

For example:

```
git add index.html
```

or

Stage all changes

```
git add .
```

Commit the staged changes

```
git commit -m [message]
```

For example:

```
git commit -m "Added a sweet section"
```

Push committed change up to github so others can get it

```
git push origin master
```

Get the latest changes that someone posted to github

```
git pull
```

If you haven't committed changes to a file, you may need to stash  those changes before you pull down the latest. After you pull down the latest, you can pop the stashed changes back.

```
git stash
git pull
git stash pop
```

