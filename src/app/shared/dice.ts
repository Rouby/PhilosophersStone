export const roll = (config: string, keep?: number) =>
{
    let [num, die] = config.split('d').map(s => +s),
        rolls: number[] = [];
    for (let i = 0; i < num; ++i)
        rolls.push(1 + Math.floor(Math.random() * die));
    if (keep > 0)
        rolls = rolls
            .sort((a, b) => b - a)
            .slice(0, keep);
    return rolls.reduce((s, v) => s + v);
};