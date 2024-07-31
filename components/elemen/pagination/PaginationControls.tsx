'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '5';

  return (

    <Pagination className="hover:cursor-pointer">
      <PaginationContent >
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (Number(page) <= 1) {
                window.location.href = `?page=1&per_page=${per_page}`;
              } else {
                const newPage = Number(page) - 1;
                window.location.href = `?page=${newPage}&per_page=${per_page}`;

              }

            }} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              const newPage = Number(page) + 1;
              window.location.href = `?page=${newPage}&per_page=${per_page}`;


            }} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

  );
}

export default PaginationControls;
