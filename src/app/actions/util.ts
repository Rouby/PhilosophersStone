let typeCache: { [label: string]: boolean } = {};
export function type(scope: string, descriptor: string)
{
    const label = `[${scope}] ${descriptor}`;

    if (typeCache[label])
    {
        throw new Error(`Action type "${label}" is not unqiue"`);
    }

    typeCache[label] = true;

    return label;
}