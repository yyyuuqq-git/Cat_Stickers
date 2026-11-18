-- 고양이 칭찬판 테이블 스키마 (Supabase SQL)

-- 1. 칭찬 스티커 판 테이블 (praise_boards)
CREATE TABLE IF NOT EXISTS public.praise_boards (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    target_count INTEGER NOT NULL DEFAULT 30,
    reward_text TEXT,
    editor_pin TEXT NOT NULL,
    reader_role_name TEXT DEFAULT '여자친구 모드 (조회 전용)',
    editor_role_name TEXT DEFAULT '남자친구 모드 (부착 가능)',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. 붙여진 스티커 테이블 (praise_stickers)
CREATE TABLE IF NOT EXISTS public.praise_stickers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    board_id TEXT REFERENCES public.praise_boards(id) ON DELETE CASCADE NOT NULL,
    sticker_index INTEGER NOT NULL,
    memo TEXT, -- 칭찬 메모 내용
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(board_id, sticker_index)
);
