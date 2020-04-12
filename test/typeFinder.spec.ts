
import { findType } from '../src/typeFinder'

describe('findType', () => {
    it('String # validate string', () => {
        const type = findType('hello world')
        expect(type).toBe('string')
    })
    it('Number # validate number', () => {
        const type = findType(100)
        expect(type).toBe('number')
    })
    it('Boolean # validate boolean', () => {
        const type = findType(true)
        expect(type).toBe('boolean')
    })
    it('Date string # validate date', () => {
        const date = new Date().toDateString()
        const type = findType(date)
        expect(type).toBe('date')
    })
    it('Date object # validate date', () => {
        const date = new Date()
        const type = findType(date)
        expect(type).toBe('date')
    })
    it('Null # validate null', () => {
        const type = findType(null)
        expect(type).toBe('null')
    })
    it('Array # validate array', () => {
        const type = findType(['hello', 'world'])
        expect(type).toBe('array')
    })
    it('object # validate object', () => {
        const type = findType({ 'name': 'hello' })
        expect(type).toBe('object')
    })
    it('undefined # validate undefined', () => {
        const type = findType(undefined)
        expect(type).toBe('undefined')
    })
    it('Number primitive # validate Number', () => {
        const type = findType(Number)
        expect(type).toBe('number')
    })
    it('String primitive # validate string', () => {
        const type = findType(String)
        expect(type).toBe('string')
    })
    it('Boolean primitive # validate Boolean', () => {
        const type = findType(Boolean)
        expect(type).toBe('boolean')
    })
    it('Array primitive # validate Array', () => {
        const type = findType(Array)
        expect(type).toBe('array')
    })
    it('Object primitive # validate Object', () => {
        const type = findType(Object)
        expect(type).toBe('object')
    })
    it('String object primitive # validate String', () => {
        const type = findType(new String('test'))
        expect(type).toBe('string')
    })
    it('Number Object primitive # validate number', () => {
        const type = findType(new Number(123))
        expect(type).toBe('number')
    })
    it('Boolean Object primitive # validate Boolean', () => {
        const type = findType(new Boolean(''))
        expect(type).toBe('boolean')
    })
})