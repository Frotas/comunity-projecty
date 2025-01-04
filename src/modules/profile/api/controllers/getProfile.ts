import { api } from "@/shared/libs/axios"

import type { ProfileProps } from "../../schema/Profile.schema"

export async function getProfile(id: string) {
	const { data } = await api.get<ProfileProps>(`/profile/${id}`)
	return data
}
