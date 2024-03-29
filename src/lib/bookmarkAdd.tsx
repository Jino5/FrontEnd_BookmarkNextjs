import axios from "axios"

// const API_BASE_URL = 'http://localhost:8080'

// use_client 사용하는 곳에서는 서버 관련 정보를 읽어올 수 없다.
// import getConfig from 'next/config'
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const getApiUrl = () => {
    return process.env.NEXT_PUBLIC_SERVER_API_BASE_URL || process.env.NEXT_PUBLIC_CLIENT_API_BASE_URL;
}

export async function saveBookmark(bookmark:{title: string, url: string}) {
    // const res = await axios.post(`${API_BASE_URL}/api/bookmarks`, bookmark)
    const res = await axios.post(`${getApiUrl()}/api/bookmarks`, bookmark)
    return res.data
}