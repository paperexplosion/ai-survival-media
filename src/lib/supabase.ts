import { createClient } from '@supabase/supabase-js';
import { UserData } from '@/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveDiagnosisResult(data: UserData): Promise<void> {
    // Skip if Supabase is not configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.warn('Supabase not configured, skipping save');
        return;
    }

    try {
        const { error } = await supabase
            .from('diagnostics')
            .insert({
                email: data.email || null,
                occupation: data.occupation || null,
                responses: data.responses,
                result: data.result,
                timestamp: data.timestamp.toISOString(),
            });

        if (error) {
            console.error('Error saving diagnosis result:', error);
            throw error;
        }
    } catch (error) {
        console.error('Error saving diagnosis result:', error);
        throw error;
    }
}
