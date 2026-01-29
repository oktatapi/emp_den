# Endpoints

## Next endpoints

* /api/employees
* /api/positions

## Employees

| Endpoint | Method | Auth | CRUD | Description |
| - | - | - | - | - |
| /employees | GET | - | Read | Get all employees |
| /employees/:id | GET | - | Read | Get an employee |
| /employees | POST | - | Create | Create new employee |
| /employees/:id | PUT | - | Update | Update an emplyoee |
| /employees/:id | DELETE | - | Delete | Delete an employee |

### New employee

Example:

```json
{
    "name": "Erős István",
    "city": "Szeged",
    "salary": 395,
    "positionId": 1
}
```

## Positions

| Endpoint | Method | Auth | CRUD | Description |
| - | - | - | - | - |
| /positions | GET | - | Read | Get all positions |
| /positions/:id | GET | - | Read | Get an position |
| /positions | POST | - | Create | Create new position |
| /positions/:id | PUT | - | Update | Update an position |
| /positions/:id | DELETE | - | Delete | Delete an position |

### New position

Example:

```json
{
    "name": "fejlesztő"
}
```
