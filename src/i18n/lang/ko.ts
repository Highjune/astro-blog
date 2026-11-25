import type { UIStrings } from "../types";

export default {
  nav: {
    home: "홈",
    posts: "글",
    categories: "카테고리",
    tags: "태그",
    about: "소개",
    archives: "아카이브",
    search: "검색",
  },
  post: {
    publishedAt: "작성",
    updatedAt: "수정",
    sharePostIntro: "이 글 공유하기:",
    sharePostOn: "{{platform}}에 공유",
    sharePostViaEmail: "이메일로 공유",
    tagLabel: "태그",
    backToTop: "맨 위로",
    tableOfContents: "목차",
    goBack: "뒤로 가기",
    editPage: "글 수정",
    previousPost: "이전 글",
    nextPost: "다음 글",
  },
  pagination: {
    prev: "이전",
    next: "다음",
    page: "페이지",
  },
  home: {
    socialLinks: "링크",
    featured: "추천 글",
    recentPosts: "최근 글",
    allPosts: "전체 글",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    categoryTitle: "카테고리",
    categoryDesc: "이 카테고리의 글 모음",
    categoryAll: "전체",

    categoriesTitle: "카테고리",
    categoriesDesc: "주제별로 나눈 글",

    tagTitle: "태그",
    tagDesc: "이 태그가 붙은 글 모음",

    tagsTitle: "태그",
    tagsDesc: "글에 사용된 모든 태그",

    postsTitle: "글",
    postsDesc: "지금까지 쓴 모든 글",

    archivesTitle: "아카이브",
    archivesDesc: "연도별로 정리한 글",

    searchTitle: "검색",
    searchDesc: "글 검색 ...",
  },
  a11y: {
    skipToContent: "본문으로 건너뛰기",
    skipTableOfContents: "목차 건너뛰기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    toggleTheme: "테마 전환",
    searchPlaceholder: "검색어를 입력하세요...",
    noResults: "검색 결과가 없습니다",
    goToPreviousPage: "이전 페이지",
    goToNextPage: "다음 페이지",
  },
  notFound: {
    title: "404 Not Found",
    message: "페이지를 찾을 수 없습니다",
    goHome: "홈으로",
  },
} satisfies UIStrings;
