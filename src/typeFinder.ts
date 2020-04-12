// type object - js types
const type = {
    'number': 'number',
    'object': 'object',
    'array': 'array',
    'boolean': 'boolean',
    'date': 'date',
    'string': 'string',
    'undefined': 'undefined',
    'null': 'null',
    'function': 'function'
}

/**
 * findType - will return type of given value
 * @param value : any
 * @returns string
 */
export function findType(value: any): string {
    // log(`finding type for ${value}`)
    const valueType = typeof value
    if (valueType === type.string) {
        if (!isNaN(Date.parse(value))) {
            return type.date
        }
        return valueType
    }
    if (valueType === type.object) {
        if (value instanceof Array && Array.isArray(value)) {
            return type.array
        }
        if (value === null) {
            return type.null
        }
        if (value instanceof Date) {
            return type.date
        }
        if (value instanceof Number) {
            return type.number
        }
        if (value instanceof String) {
            return type.string
        }
        if (value instanceof Boolean) {
            return type.boolean
        }
        return valueType
    }
    if (valueType === type.function) {
        if (value.name) {
            return value.name.toLowerCase()
        }
    }
    return valueType
}
