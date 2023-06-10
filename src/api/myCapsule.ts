import client from './client';

export async function getCapsulMember() {
  const response = await client.get('/member/capsules/1');
  return response.data;
}

export async function getCapsulTag() {
  const response = await client.get('/member/capsules/tag/1');
  return response.data;
}

export async function getCapsulSight() {
  const response = await client.get('/member/capsules/sight/1');
  return response.data;
}
