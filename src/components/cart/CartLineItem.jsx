import { formatAud } from '../../utils/formatters';

export default function CartLineItem({ item, onRemove }) {
  return (
    <li className="flex items-center justify-between p-3 bg-brand-50 rounded-xl border border-brand-100">
      <div>
        <h4 className="text-xs font-semibold text-brand-900">{item.title}</h4>
        <p className="text-[10px] text-brand-600">{formatAud(item.price)}</p>
      </div>
      <button
        type="button"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.title} from bag`}
        className="text-red-400 hover:text-red-600 text-xs"
      >
        <i className="fa-solid fa-trash" aria-hidden="true" />
      </button>
    </li>
  );
}
