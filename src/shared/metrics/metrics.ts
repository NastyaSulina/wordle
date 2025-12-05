declare const ym: (id: number, event: string, goal?: string) => void

export function track(eventName: string) {
    try {
        ym(105692351, 'reachGoal', eventName)
    } catch {
        // Ошибки метрики
    }
}
