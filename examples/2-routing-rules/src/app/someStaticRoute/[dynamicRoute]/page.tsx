interface PageProps {
  params: {
    dynamicRoute: string;
  };
}

export default function Page({ params }: PageProps) {
  console.log(params);
  return <div>Current Path: {params.dynamicRoute}</div>;
}
