import BigNumber from 'bignumber.js'
import numeral from 'numeral'

import { ONE_TOKEN } from './constants'

BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  EXPONENTIAL_AT: [-10, 20],
})

/**
 * Format Terra amount
 * @param value - string: amount from Terra blockchain
 * @param format - string: numeral format
 * @returns string
 */
export const fromTerraAmount = (
  value: BigNumber.Value = '0',
  format = '0,0.00a',
): string => {
  const amount = new BigNumber(value).div(ONE_TOKEN)
  return numeral(amount).format(format).toUpperCase()
}

export const toTerraAmount = (value: BigNumber.Value = '0'): string => {
  return new BigNumber(value).dp(6).times(ONE_TOKEN).toString()
}

export const toDecimal = (
  value: BigNumber.Value = '0',
  dp: number = 6,
): string => {
  return new BigNumber(value).toFixed(dp).toString()
}

export const toNumber = (value: BigNumber.Value = '0'): number => {
  return new BigNumber(value).toNumber()
}

export const num = (value: BigNumber.Value = '0'): BigNumber => {
  return new BigNumber(value)
}
