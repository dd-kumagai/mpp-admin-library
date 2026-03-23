import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as u, useState as N } from "react";
import { Logotype as y, IconButton as g, cn as d, Icon as w, Select as k } from "@mpp/core";
const P = u(
  ({
    className: i,
    groups: r,
    activePage: o,
    onNavigate: n,
    expanded: c,
    onExpandedChange: x,
    ...m
  }, p) => {
    const [f, h] = N(!0), t = c ?? f, v = () => {
      const l = !t;
      h(l), x?.(l);
    };
    return /* @__PURE__ */ a(
      "aside",
      {
        ref: p,
        className: d(
          "shrink-0 bg-bg-primary-alternative flex flex-col gap-md h-screen sticky top-0 transition-all duration-[var(--transition-default)]",
          t ? "w-[200px] min-w-[200px]" : "w-auto",
          i
        ),
        ...m,
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: d(
                "flex items-center shrink-0",
                t ? "justify-between pl-xs" : "justify-center"
              ),
              children: [
                t && /* @__PURE__ */ e(y, { height: 28, color: "white", alt: "My Pet +", className: "mt-3xs" }),
                /* @__PURE__ */ e(
                  g,
                  {
                    icon: "menu",
                    size: "lg",
                    "aria-label": "メニュー",
                    className: "text-text-inverse",
                    onClick: v
                  }
                )
              ]
            }
          ),
          r.map((l) => /* @__PURE__ */ a("nav", { className: "flex flex-col", children: [
            /* @__PURE__ */ e("div", { className: "px-xs pb-3xs", children: /* @__PURE__ */ e("span", { className: "font-body font-medium text-xs leading-tight text-text-inverse", children: t ? l.title : "　" }) }),
            l.items.map((s) => {
              const b = s.page === o;
              return /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  "aria-current": b ? "page" : void 0,
                  onClick: () => {
                    s.page && n && n(s.page);
                  },
                  className: d(
                    "flex items-center min-h-[40px] px-xs py-2xs cursor-pointer transition-colors duration-[var(--transition-default)]",
                    t ? "gap-2xs w-full" : "justify-center",
                    b ? "bg-bg-neutral text-text-link" : "text-text-inverse hover:bg-white/10"
                  ),
                  children: [
                    /* @__PURE__ */ e(w, { name: s.icon, size: 24, className: "shrink-0" }),
                    t && /* @__PURE__ */ e("span", { className: "font-body font-medium text-lg leading-relaxed flex-1 text-left", children: s.label })
                  ]
                },
                s.label
              );
            })
          ] }, l.title))
        ]
      }
    );
  }
);
P.displayName = "Sidebar";
const j = u(
  ({ className: i, title: r, onBack: o, ...n }, c) => /* @__PURE__ */ a(
    "header",
    {
      ref: c,
      className: d(
        "flex items-center bg-bg-default border-b border-border-default",
        i
      ),
      ...n,
      children: [
        /* @__PURE__ */ e(
          g,
          {
            icon: "chevron_left",
            size: "lg",
            "aria-label": "戻る",
            onClick: o
          }
        ),
        /* @__PURE__ */ e("h1", { className: "flex-1 font-heading font-bold text-h2 leading-normal text-text-default", children: r })
      ]
    }
  )
);
j.displayName = "PageHeader";
const S = [
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "50", label: "50" },
  { value: "100", label: "100" }
], C = u(
  ({ className: i, from: r, to: o, total: n, perPage: c, onPerPageChange: x, ...m }, p) => /* @__PURE__ */ a(
    "div",
    {
      ref: p,
      className: d("flex items-center gap-md", i),
      ...m,
      children: [
        /* @__PURE__ */ a("span", { className: "font-body text-base leading-normal text-text-default", children: [
          r,
          "-",
          o,
          " / ",
          n,
          " を表示中"
        ] }),
        /* @__PURE__ */ e(
          k,
          {
            layout: "inline",
            label: "表示件数",
            options: S,
            defaultValue: String(c),
            onChange: (f) => x?.(Number(f.target.value)),
            className: "w-[144px]"
          }
        )
      ]
    }
  )
);
C.displayName = "PaginationFooter";
export {
  j as PageHeader,
  C as PaginationFooter,
  P as Sidebar
};
