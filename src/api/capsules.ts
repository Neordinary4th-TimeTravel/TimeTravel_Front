import client from './client';

interface ViewImminentCapsuleResDto {
  categoryName: string;
  memberNickname: string;
  postTitle: string;
  postYear: number;
  postText: string;
  postSong: string;
  postRelease: string;
  postPublic: boolean;
}

export async function getCloseCapsules(id: number) {
  const response = await client.get<ViewImminentCapsuleResDto>(
    `/capsules/close/${id}`,
  );
  return response.data;
}

interface ViewPostCategoryResDto {
  categoryList: string;
}

export async function getCapsulesCategory() {
  const response = await client.get<ViewPostCategoryResDto>(
    `/capsules/category`,
  );
  return response.data;
}

interface FindPostByCategoryResDto {
  postTitleList: string;
  nextCursor: number;
}

interface FindPostByCategoryReqDto {
  categoryIdx: number;
  scrollSize: number;
}

export async function searchCapsulesCategory({
  categoryIdx,
  scrollSize,
}: FindPostByCategoryReqDto) {
  const params: FindPostByCategoryReqDto = {categoryIdx, scrollSize};
  const response = await client.get<FindPostByCategoryResDto>(
    `/capsules/category/search`,
    {params},
  );
  return response.data;
}

interface FindPostByTextResDto {
  postTitleList: string;
  nextCursor: number;
}

interface FindPostByTextReqDto {
  postText: string;
  scrollSize: string;
}

export async function searchTextCapsulesCategory({
  postText,
  scrollSize,
}: FindPostByTextReqDto) {
  const params: FindPostByTextReqDto = {postText, scrollSize};
  const response = await client.get<FindPostByTextResDto>(
    `/capsules/category/search/text`,
    {params},
  );
  return response.data;
}

interface ViewPostResDto {
  categoryName: string;
  memberNickname: string;
  postTitle: string;
  postYear: number;
  postText: string;
  postSong: string;
  postRelease: string; // ISO
  postPublic: boolean;
}

interface ViewPostReqDto {
  postIdx: number;
}

export async function getCapsules({postIdx}: ViewPostReqDto) {
  const params: ViewPostReqDto = {postIdx};
  const response = await client.get<ViewPostResDto>(`/capsules`, {
    params,
  });
  return response.data;
}

type Category = {
  createdAt: string; // ISO
  updatedAt: string; // ISO
  state: 'ACTIVE' | 'INACTIVE';
  categoryIdx: number;
  categoryName: string;
};

interface ScrapPostCategoryReqDto {
  memberIdx: number;
  categoryIdx: Category;
}

export async function postCategoryScrap({...data}: ScrapPostCategoryReqDto) {
  const response = await client.post(`/capsules/category/scrap`, data);
  return response.data;
}

interface ToggleCapsuleLikeReqDto {
  memberIdx: number;
  postIdx: number;
}

export async function postCapuslesLike({...data}: ToggleCapsuleLikeReqDto) {
  const response = await client.post(`/capsules/capsule`, data);
  return response.data;
}

interface PatchNicknameReqDto {
  memberIdx: number;
  targetNickname: string;
}

export async function petchModeNicknmae({...data}: PatchNicknameReqDto) {
  const response = await client.patch(`/member/member/mod-nickname`, data);
  return response.data;
}

interface CapDto {
  creationDateTime: string;
  releaseDateTime: string;
  capsuleTitle: string;
}

interface CapResDto {
  closedList: CapDto;
  openedList: CapDto;
}

interface CapResReqDto {
  memberIdx: number;
}

export async function getMemberCapsules({memberIdx}: CapResReqDto) {
  const params: CapResReqDto = {memberIdx};
  const response = await client.get<CapResDto>(`/member/capsules`, {
    params,
  });
  return response.data;
}

export async function getMemberCapsulesTag({memberIdx}: CapResReqDto) {
  const params: CapResReqDto = {memberIdx};
  const response = await client.get<CapResDto>(`/member/capsules`, {
    params,
  });
  return response.data;
}

export async function getMemberCapsulesSight({memberIdx}: CapResReqDto) {
  const params: CapResReqDto = {memberIdx};
  const response = await client.get<CapResDto>(`/member/capsules`, {
    params,
  });
  return response.data;
}

interface FindScrapCategoryResDto {
  categoryNameList: string[];
}

export async function getCapsulesScrap({memberIdx}: CapResReqDto) {
  const params: CapResReqDto = {memberIdx};
  const response = await client.get<FindScrapCategoryResDto>(
    `/capsules/scrap`,
    {
      params,
    },
  );
  return response.data;
}

export async function getCapsulesLike({memberIdx}: CapResReqDto) {
  const params: CapResReqDto = {memberIdx};
  const response = await client.get<CapResDto>(`/member/capsules/like`, {
    params,
  });
  return response.data;
}

export async function getCapsulesCommnet({memberIdx}: CapResReqDto) {
  const params: CapResReqDto = {memberIdx};
  const response = await client.get<CapResDto>(`member/capsules/commnet`, {
    params,
  });
  return response.data;
}

export async function getCapsulesClose({memberIdx}: CapResReqDto) {
  const params: CapResReqDto = {memberIdx};
  const response = await client.get<ViewImminentCapsuleResDto>(
    `/member/capsules/close`,
    {
      params,
    },
  );
  return response.data;
}

export async function getCapsulesCategorySearch({
  categoryIdx,
  scrollSize,
}: FindPostByCategoryReqDto) {
  const params: FindPostByCategoryReqDto = {categoryIdx, scrollSize};
  const response = await client.get<FindPostByCategoryResDto>(
    `/capsules/category/search`,
    {
      params,
    },
  );
  return response.data;
}

export async function getCapsulesCategorySearchText({
  postTitleList,
  nextCursor,
}: FindPostByTextResDto) {
  const params: FindPostByTextResDto = {postTitleList, nextCursor};
  const response = await client.get<FindPostByTextResDto>(
    `/capsules/category/search/text`,
    {
      params,
    },
  );
  return response.data;
}
