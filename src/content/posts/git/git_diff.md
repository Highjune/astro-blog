---
title: "git diff"
pubDatetime: 2023-01-18T22:37:00+09:00
description: "Staging Area와 마지막 커밋 비교"
tags: ["git"]
category: "git"
draft: false
---


## git diff, 두 트리 개체 차이 보여주기
- 워킹 디렉터리와 Staging Area 비교
  - 그래서 작업한 내용을 `git add` 명령어로 Staging Area로 옮기면 당연히 아무내용도 안 뜸
```
git diff
```
- Staging Area와 마지막 커밋 비교
```
git diff --staged
```
- 두 커밋 비교
```
git diff master branchB
```