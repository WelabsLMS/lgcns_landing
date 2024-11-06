import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://lgcnscamp.kr/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://lgcnscamp.kr/apply',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    ]
}