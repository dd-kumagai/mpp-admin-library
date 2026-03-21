# @mpp/admin-library — MPP Admin Component Library

Product-specific React components for MPP admin panels. Built on top of `@mpp/core` design system.

## Setup

```bash
# Install (from GitHub — requires @mpp/core as peer)
npm install git+ssh://git@github.com:dd-kumagai/mpp-core-library.git
npm install git+ssh://git@github.com:dd-kumagai/mpp-admin-library.git

# Import CSS in your app's entry point (includes @mpp/core tokens)
import "@mpp/admin-library/css";
```

## Available Components

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Sidebar` | Navigation sidebar with grouped menu items | `groups`: NavGroup[], `activePage`: string, `onNavigate`: (page: string) => void |
| `PageHeader` | Top page header with title and back button | `title`: string, `onBack?`: () => void |
| `PaginationFooter` | Pagination display with per-page selector | `from`, `to`, `total`, `perPage`, `onPerPageChange?` |

## Types

```tsx
interface NavItem {
  icon: IconName;  // from @mpp/core
  label: string;
  page?: string;   // navigation target identifier
}

interface NavGroup {
  title: string;
  items: NavItem[];
}
```

## Usage

```tsx
import { Sidebar, PageHeader, PaginationFooter, type NavGroup } from "@mpp/admin-library";

const navGroups: NavGroup[] = [
  {
    title: "顧客管理",
    items: [
      { icon: "user", label: "契約者", page: "contractors" },
      { icon: "paw", label: "CA" },
    ],
  },
];

function AdminApp() {
  const [page, setPage] = useState("contractors");

  return (
    <div className="flex min-h-screen bg-bg-neutral font-body">
      <Sidebar groups={navGroups} activePage={page} onNavigate={setPage} />
      <div className="flex-1 flex flex-col min-w-0">
        <PageHeader title="契約者" />
        <main>{/* page content */}</main>
        <PaginationFooter from={1} to={15} total={999} perPage={15} />
      </div>
    </div>
  );
}
```

## Conventions

- All components use `forwardRef` with exported TypeScript interfaces.
- Depends on `@mpp/core` for design tokens, icons, and primitive components.
- Sidebar is data-driven — pass navigation structure as `groups` prop, don't hardcode.
- Japanese locale for all UI text.
