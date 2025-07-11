export type Key = {
    code: string
    label: string
    type: 'char' | 'action'
}

export const RU_KEYBOARD_LAYOUT: Key[][] = [
    [
        { code: 'char-й', label: 'й', type: 'char' },
        { code: 'char-ц', label: 'ц', type: 'char' },
        { code: 'char-у', label: 'у', type: 'char' },
        { code: 'char-к', label: 'к', type: 'char' },
        { code: 'char-е', label: 'е', type: 'char' },
        { code: 'char-н', label: 'н', type: 'char' },
        { code: 'char-г', label: 'г', type: 'char' },
        { code: 'char-ш', label: 'ш', type: 'char' },
        { code: 'char-щ', label: 'щ', type: 'char' },
        { code: 'char-з', label: 'з', type: 'char' },
        { code: 'char-х', label: 'х', type: 'char' },
        { code: 'char-ъ', label: 'ъ', type: 'char' },
    ],
    [
        { code: 'char-ф', label: 'ф', type: 'char' },
        { code: 'char-ы', label: 'ы', type: 'char' },
        { code: 'char-в', label: 'в', type: 'char' },
        { code: 'char-а', label: 'а', type: 'char' },
        { code: 'char-п', label: 'п', type: 'char' },
        { code: 'char-р', label: 'р', type: 'char' },
        { code: 'char-о', label: 'о', type: 'char' },
        { code: 'char-л', label: 'л', type: 'char' },
        { code: 'char-д', label: 'д', type: 'char' },
        { code: 'char-ж', label: 'ж', type: 'char' },
        { code: 'char-э', label: 'э', type: 'char' },
        { code: 'Backspace', label: '←', type: 'action' },
    ],
    [
        { code: 'char-я', label: 'я', type: 'char' },
        { code: 'char-ч', label: 'ч', type: 'char' },
        { code: 'char-с', label: 'с', type: 'char' },
        { code: 'char-м', label: 'м', type: 'char' },
        { code: 'char-и', label: 'и', type: 'char' },
        { code: 'char-т', label: 'т', type: 'char' },
        { code: 'char-ь', label: 'ь', type: 'char' },
        { code: 'char-б', label: 'б', type: 'char' },
        { code: 'char-ю', label: 'ю', type: 'char' },
        { code: 'Enter', label: 'Ввод', type: 'action' },
    ],
]

export const EN_KEYBOARD_LAYOUT: Key[][] = [
    [
        { code: 'char-q', label: 'q', type: 'char' },
        { code: 'char-w', label: 'w', type: 'char' },
        { code: 'char-e', label: 'e', type: 'char' },
        { code: 'char-r', label: 'r', type: 'char' },
        { code: 'char-t', label: 't', type: 'char' },
        { code: 'char-y', label: 'y', type: 'char' },
        { code: 'char-u', label: 'u', type: 'char' },
        { code: 'char-i', label: 'i', type: 'char' },
        { code: 'char-o', label: 'o', type: 'char' },
        { code: 'char-p', label: 'p', type: 'char' },
    ],
    [
        { code: 'char-a', label: 'a', type: 'char' },
        { code: 'char-s', label: 's', type: 'char' },
        { code: 'char-d', label: 'd', type: 'char' },
        { code: 'char-f', label: 'f', type: 'char' },
        { code: 'char-g', label: 'g', type: 'char' },
        { code: 'char-h', label: 'h', type: 'char' },
        { code: 'char-j', label: 'j', type: 'char' },
        { code: 'char-k', label: 'k', type: 'char' },
        { code: 'char-l', label: 'l', type: 'char' },
        { code: 'Backspace', label: '←', type: 'action' },
    ],
    [
        { code: 'char-z', label: 'z', type: 'char' },
        { code: 'char-x', label: 'x', type: 'char' },
        { code: 'char-c', label: 'c', type: 'char' },
        { code: 'char-v', label: 'v', type: 'char' },
        { code: 'char-b', label: 'b', type: 'char' },
        { code: 'char-n', label: 'n', type: 'char' },
        { code: 'char-m', label: 'm', type: 'char' },
        { code: 'Enter', label: 'Enter', type: 'action' },
    ],
]
