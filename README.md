# Dataform Training

## 0_base_tables

Includes 'declarations' for existing tables that have been created manually through uploading JSON files from Cloud Storage to BigQuery

## 1_simple_examples

"dataset_1" creates a table and populates its with the values from the query directly within Dataform
"people_planets" creates a materialised view joining two tables "people" and "planets"

## 2_advanced_examples

"dataset_2" creates a table with two inner joins and utilise the unfunction to unnest nested data previously occuring 
"generate_with_for_loops" uses the javascript api to generate multiple queries and makes use of the custom SQL operation pre_operations to execute a prelininary query
"incremental_data" creates an incremental table that only inserts or merges new row into the table based on the condition configured

## 3_operations

"delete_data" executes custom SQL operations. One delete data from a table and another creating an empty table with an integer and a string column.
"load_gcs_data" 

## 4_tests_and_assertions

"consolidated_starships" creates a new table with documented descriptions of each columns and assertions to increase and maintain data quality
"non_null_values" is an asseration for a data table preventing null values
"test_input" defines a test inputting data into a table and builds on the "consolidated_starships" table testing the unique values assertion 

## 5_other_examples

"documented_tables" creates a new table with documented descriptions for each column
"generate_data_from_script" utilises the javascript API to build queries based on a javascript functions within the includes directory

## Includes

"generate_random_datasets" overwrites the original data populated within "dataset_1" by consolidating and grouping data
"script_builder" is the javascript function building the queries within "generate_data_from_script"


# Additional Supporting Material

- https://cloud.google.com/dataform/docs/quickstart-schedule-production-executions
- https://cloud.google.com/dataform/docs/log-based-alerts
- https://cloud.google.com/dataform/docs/custom-sql
- https://cloud.google.com/dataform/docs/tags
- https://cloud.google.com/dataform/docs/reference/sample-scripts

- https://cloud.google.com/dataform/docs/configure-dataform

- https://cloud.google.com/dataform/docs/best-practices
- https://cloud.google.com/dataform/docs/structure-repositories

- https://github.com/GoogleCloudPlatform/marketing-data-engine-dataform/tree/main/definitions/ads_domain




