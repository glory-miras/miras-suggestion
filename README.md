# miras-suggestion API Documentation

## Overview

**BASE URL** http://localhost:3000

# list of routes 

## | Get All Beers

#### __GET__ /beers


## | Get Single Beers

#### __GET__ /beers


| Params                        | Type                  |              
|:------------------------------|:----------------------|
|id                             | String                |


## | Get Recommendetion Beers

#### __POST__ /beers/recommended
| Params                        | Type                  |              
|:------------------------------|:----------------------|
| text                          | String                |



### STATUS CODE
| Code                          | Description                   |
|:------------------------------|:------------------------------|
| 200                           | OK                            |
| 500                           | Internal Server Error