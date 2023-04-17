import clsx from 'clsx'
import { useCombobox } from 'downshift'
import { useId, useState } from 'react'

/*
  placeholder: input search placeholder
  label: input label
  onEnter: fn(query) executed when press enter without selected item
  onSelect: fn(selected) executed when item is selected
  query: initial value of query
  setQuery: setQuery fn
  data: list items to search
  isFetching: boolean that indicate if is fetching/loading
  itemTitle: key of object type item
  itemSubtitle: optional key for object type item
*/

export default function ComboBox({
  placeholder,
  label,
  onEnter,
  onSelect,
  query,
  setQuery,
  data,
  isFetching,
  itemTitle = 'title',
  itemSubtitle,
}) {
  const id = useId()
  const [selectedJob, setSelectedJob] = useState(null)

  const cb = useCombobox({
    id,
    onSelectedItemChange: ({ selectedItem }) => {
      setSelectedJob(selectedItem)
      if (onSelect && typeof onSelect === 'function') {
        onSelect(selectedItem)
      }
      // router.push(`/jobs/${selectedItem?.code}`)
    },
    items: query === '' ? [] : data || [],
    itemToString: item => (item ? item[itemTitle] : ''),
    onInputValueChange: changes => {
      setSelectedJob(null)
      setQuery(changes.inputValue ?? '')
      // Fetch
      // setKey(data),
    },
  })

  const displayMenu = cb.isOpen && query !== '' && data?.length > 0

  return (
    <div className="relative w-full">
      <div
        {...cb.getMenuProps({ id: 'menu-lb', className: 'relative', role: '' })}
      >
        {label && (
          <label className="mb-px px-1 text-sm text-slate-700" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          {...cb.getInputProps({
            id,
            value: query,
            className: clsx(
              'w-full px-4 py-3 text-lg outline-none focus:ring-2',
              {
                'rounded-t-lg rounded-b-0': displayMenu,
                'rounded-lg': !displayMenu,
              },
            ),
            'aria-label': 'input search',
            placeholder,
            name: 'query',
            onKeyDown(e) {
              if (
                e.key === 'Enter' &&
                !selectedJob &&
                cb.highlightedIndex < 0
              ) {
                if (onEnter && typeof onEnter === 'function') {
                  onEnter(query)
                  setQuery('')
                }
                // Navigate to advanced ssearch
                /*
                router.push(
                  `/jobs/search${query.length > 0 ? `?query=${query}` : ''}`,
                )
                */
              }
            },
          })}
        />
        <Spinner showSpinner={query !== '' && isFetching} />
      </div>
      <ul
        {...cb.getMenuProps({
          className: clsx(
            'absolute z-10 max-h-[180px] w-full overflow-y-scroll  rounded-b border border-t-0 border-gray-500 bg-white shadow-lg',
            { hidden: !displayMenu },
          ),
        })}
      >
        {displayMenu
          ? data.map((item, index) => (
              <li
                className={clsx(
                  'flex cursor-pointer flex-col gap-1 border-b p-2',
                  {
                    'bg-[#1c2441] text-white': cb.highlightedIndex === index,
                  },
                )}
                key={index}
                {...cb.getItemProps({ item, index })}
              >
                <span className="font-bold">{item[itemTitle]}</span>
                {itemSubtitle ? (
                  <span className="text-sm text-slate-600">
                    {item[itemSubtitle]}
                  </span>
                ) : null}
              </li>
            ))
          : null}
      </ul>
    </div>
  )
}

export function Spinner({ showSpinner }) {
  return (
    <div
      className={`absolute right-0 top-[6px] transition-opacity ${
        showSpinner ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <svg
        className="-ml-1 mr-3 h-5 w-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
      >
        <title>Loading</title>
        <circle
          className="opacity-25"
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          strokeWidth={4}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  )
}
