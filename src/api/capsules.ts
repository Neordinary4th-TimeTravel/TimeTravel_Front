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
