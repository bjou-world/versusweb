export const fetchVersusDrop = `
// This script checks that the accounts are set up correctly for the marketplace tutorial.
//
import Auction, Versus from 0xf8d6e0586b0a20c7
/*
  Script used to get the first active drop in a versus 
 */
pub fun main(address:Address) : Versus.DropStatus?{
  return Versus.getActiveDrop(address: address)
}
`;
