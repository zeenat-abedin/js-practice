import { useState, useMemo } from 'react';

import './App.css';

const ROLES = [
  { id: 1, name: 'Branch Manager' },
  { id: 2, name: 'Super Admin' },
  { id: 3, name: 'Analyst' },
  { id: 4, name: 'Editor' },
  { id: 5, name: 'Viewer' },
  { id: 6, name: 'Branch Manager' },
];

const ACCESS_TYPES = ['All', 'Read', 'Write', 'Delete', 'Manage', 'Export'];

const CATEGORIES = [
  'User Management',
  'Billing',
  'Reports',
  'Settings',
  'Audit Logs',
  'Support Tickets',
  'Documents',
  'Analytics',
];

const INITIAL_RULES = [
  {
    id: 1,
    roleId: 1,
    access: 'Manage',
    catgories: ['User Management', 'Billing', 'Settings', 'Audit Logs'],
  },
  {
    id: 2,
    roleId: 2,
    access: 'Write',
    catgories: ['Reports', 'Billing', 'Settings', 'Audit Logs'],
  },
  {
    id: 3,
    roleId: 3,
    access: 'Read',
    catgories: ['Reports', 'Documents', 'Analytics'],
  },
  {
    id: 4,
    roleId: 4,
    access: 'Export',
    catgories: ['Reports', 'Billing', 'Audit Logs'],
  },
];

function App() {
  const [search, setSearch] = useState('');
  const [accessFilter, setAccessFilter] = useState('All');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [rules, setRules] = useState(INITIAL_RULES);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const filteredRules = useMemo(() => {
    return rules.filter((rule) => {
      const role = ROLES.find((r) => r.id === rule.roleId);
      const matchesSearch = search === '' || role?.name.toLowerCase();
      const matchesAccess = accessFilter === 'All' || rule.access === accessFilter;
      const matchesCatgeory =
        selectedCategories.length === 0 ||
        selectedCategories.every((cat) => rule.catgories.includes(cat));
      return matchesSearch && matchesAccess && matchesCatgeory;
    });
  }, [accessFilter, rules, search, selectedCategories]);

  const getRoleName = (id) => ROLES.find((r) => r.id === id)?.name ?? 'Unknown';

  return (
    <>
      <div>
        <button>Add Rule</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by role name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <select value={accessFilter} onChange={(e) => setAccessFilter(e.target.value)}>
          {ACCESS_TYPES.map((t) => (
            <option key={t} value={t}>
              {t === 'All' ? 'All Access Types' : t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3>Filter by Category</h3>
        <div>
          {CATEGORIES.map((cat) => {
            const active = selectedCategories.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                style={{ fontWight: active ? 600 : 400, cursor: 'pointer' }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rules List */}
      {filteredRules.map((rule) => (
        <>
          <span>{getRoleName(rule.roleId)}</span>
          <span>{rule.access}</span>
        </>
      ))}
    </>
  );
}

export default App;
