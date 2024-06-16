interface PageProps {
  params: {
    dynamicRoute: string;
  };
}

export default function Page({ params }: PageProps) {
  console.log(params);

  return (
    <div>
      <h1>
        Optional catch-all dynamic route with static route at the same level
      </h1>
      <p>Current Path: {JSON.stringify(params.dynamicRoute)}</p>
      <p>This comes earlier than static route.</p>
    </div>
  );
}
