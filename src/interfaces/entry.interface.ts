export interface IEntry {
  /**
   * Stores the id for an entry
  */
  id: string;
  /**
   * Represents the numeric value of the entry
   */
  value: string;
  /**
   * Represents the type of the entry that should be stored
   * income / expense
   */
  type: 'income' | 'expense';
  /**
   * Represents the description for the entry
   */
  description: string;
  /**
   * Date on which the entry was created
   */
  date: string;
}
