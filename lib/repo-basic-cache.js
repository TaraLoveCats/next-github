import LRU from 'lru-cache'

const cache = new LRU({
    maxAge: 1000 * 60 * 60 //仓库的基础信息变化不快
})

// full_name: /facebook/react
export function setCache(repo) {
    const full_name = repo.full_name;
    cache.set(full_name, repo)
}

export function getCache(full_name) {
    return cache.get(full_name)
}

export function cacheArray(repos) {
    if (repos && Array.isArray(repos)) {
        repos.forEach(repo => setCache(repo))
    }
}