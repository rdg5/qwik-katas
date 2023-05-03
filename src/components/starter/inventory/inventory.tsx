import { component$ } from '@builder.io/qwik';

interface InventoryProps {
	title: string;
}

export default component$((props: InventoryProps) => {
  return (
		<h1>{props.title}</h1>
	)});
