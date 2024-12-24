import pb from "@/utils/pocketbase";

import { ICategoriesContextState, IPBRecord, TransacType } from "@/interfaces";

/**
 * Fetches all categories from the 'categories' collection and returns them categorized into
 * income and expense groups. Each group contains an object that maps category IDs to their
 * respective category names.
 *
 * The return type is structured as an object with two properties:
 * - `income`: A map of category IDs to category names for income-related categories.
 * - `expense`: A map of category IDs to category names for expense-related categories.
 *
 * @returns {Promise<ICategoriesContextState | null>} A promise that resolves to an object containing
 *          two properties, `income` and `expense`, which are maps of category IDs to names.
 *          Returns `null` if no data is found or the fetch fails.
 *
 * @example
 * const categories = await getAll();
 * console.log(categories);
 * // { income: { '123': 'Salary', '456': 'Investment' }, expense: { '789': 'Rent', '101': 'Groceries' } }
 */
const getAll = async (): Promise<ICategoriesContextState | null> => {
  // Define an interface to represent the category records in the collection
  interface IPBCatRecords extends IPBRecord {
    category: string;
    type: number;
  }

  // Fetch all records from the 'categories' collection
  const data = (await pb
    .collection("categories")
    .getFullList()) as IPBCatRecords[];

  // Return null if no data is found
  if (!data) {
    return null;
  }

  // Create an object to hold the categories as key-value pairs
  const res: ICategoriesContextState = {
    income: {},
    expense: {},
  };

  // Map category names to their respective IDs based on type
  for (const record of data) {
    if (record.type === TransacType.EXPENSE) {
      res.expense[record.id] = record.category;
    } else if (record.type === TransacType.INCOME) {
      res.income[record.id] = record.category;
    }
  }

  return res;
};

/**
 * Creates a new category in the 'categories' collection with the given name.
 * If successful, returns true, otherwise returns false.
 *
 * @param {string} categoryName The name of the category to create.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the creation is successful, `false` otherwise.
 *
 * @example
 * const result = await createOne('new-category');
 * console.log(result); // true if successful
 */
const createOne = async (categoryName: string): Promise<boolean> => {
  try {
    // Create a new record in the 'categories' collection with the provided category name
    await pb.collection("categories").create({
      category: categoryName,
    });
    return true; // Return true if successful
  } catch (error) {
    // Log any errors that occur during the creation process
    console.error(error);
  }
  return false; // Return false if an error occurred
};

/**
 * Updates the name of an existing category in the 'categories' collection.
 * If successful, returns true, otherwise returns false.
 *
 * @param {string} categoryId The ID of the category to update.
 * @param {string} newCategoryName The new name to set for the category.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the update is successful, `false` otherwise.
 *
 * @example
 * const result = await updateOne('123', 'new-category-name');
 * console.log(result); // true if successful
 */
const updateOne = async (
  categoryId: string,
  newCategoryName: string,
): Promise<boolean> => {
  try {
    // Update the category record with the given ID in the 'categories' collection
    await pb.collection("categories").update(categoryId, {
      category: newCategoryName,
    });
    return true; // Return true if successful
  } catch (error) {
    // Log any errors that occur during the update process
    console.error(error);
  }
  return false; // Return false if an error occurred
};

/**
 * Deletes a category from the 'categories' collection by its ID.
 * If successful, returns true, otherwise returns false.
 *
 * @param {string} categoryId The ID of the category to delete.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the deletion is successful, `false` otherwise.
 *
 * @example
 * const result = await deleteOne('123');
 * console.log(result); // true if successful
 */
const deleteOne = async (categoryId: string): Promise<boolean> => {
  try {
    // Delete the category record with the given ID from the 'categories' collection
    await pb.collection("categories").delete(categoryId);
    return true; // Return true if successful
  } catch (error) {
    // Log any errors that occur during the deletion process
    console.error(error);
  }
  return false; // Return false if an error occurred
};

const CategoryActions = Object.freeze({
  getAll,
  createOne,
  updateOne,
  deleteOne,
});

export default CategoryActions;
